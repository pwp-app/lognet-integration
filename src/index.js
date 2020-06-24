import Logger from './logger';

class Lognet {
    constructor() {
        this.inited = false;
        // init options
        this.options = {
            appKey: null,
            missionId: null,
            injection: false,
            debug: false,
        };
        // init logger
        this.logger = new Logger(this.options.appKey, this.options.missionId);
        this.debug = this.logger.debug;
        this.info = this.logger.info;
        this.warn = this.logger.warn;
        this.error = this.logger.error;
        // set up parent
        this.logger.parent = this;
        // init listener
        this.addListener();
    }
    getClientInfo = () => {
        return {
            clientWidth: document.body.clientWidth,
            clientHeight: document.body.clientHeight,
            windowInnerWidth: window.innerWidth,
            windowInnerHeight: window.innerHeight,
            windowOuterWidth: window.outerWidth,
            windowOuterHeight: window.outerHeight,
            userAgent: window.navigator.userAgent,
        }
    }
    addListener = () => {
        window.addEventListener('error', (e) => {
            const content = `错误信息: ${e.message}\r\n文件: ${e.filename}\r\n行号: ${e.lineno}\r\n列号: ${e.colno}`;
            this.submitGeneral(content);
        });
    }
    submitGeneral = (content) => {
        if (!this.options.appKey) {
            this.printError('App key is not set.');
            return;
        }
        if (!content || content.length < 1) {
            this.printError('Cannot submit empty content.');
            return;
        }
        fetch('https://lognet.pwp.app/api/submit/general', {
            method: 'POST',
            body: JSON.stringify({
                appKey: this.options.appKey,
                path: window.location.pathname,
                content: content,
                ...this.getClientInfo()
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        }).catch((e) => {
            if (this.debug) {
                this.printError(e);
            }
        });
    }
    printError = (err) => {
        if (this.injection) {
            this.privateError.apply(console, err);
        } else {
            console.error(err);
        }
    }
    init = () => {
        if (!this.inited) {
            let dom = document.getElementById('lognet');
            if (dom) {
                let key = dom.getAttribute('key');
                let mission = dom.getAttribute('mission');
                this.options.appKey = key ? key : this.options.appKey;
                this.options.missionId = mission ? mission : this.options.missionId;
            }
            // init injection
            if (this.injection) {
                interceptConsole();
            }
            this.inited = true;
        }
    }
    setKey = (appKey) => {
        if (typeof appKey !== 'string') {
            this.printError('App key must be a string.');
            return;
        }
        this.options.appKey = appKey;
    }
    setMission = (missionId) => {
        if (typeof missionId !== 'string') {
            this.printError('Mission ID must be a string.');
            return;
        }
        this.options.missionId = missionId;
    }
    setInjection = (injection) => {
        if (typeof injection !== 'boolean') {
            this.printError('Please set a boolean to injection option.');
            return;
        }
        this.injection = injection;
        if (!this.injection) {
            console.error = this.privateError;
        } else {
            this.interceptConsole();
        }
    }
    setDebug = (flag) => {
        if (typeof flag !== 'boolean') {
            this.printError('Please set a boolen to debug flag.');
            return;
        }
        this.debug = flag;
    }
    setOptions = (options) => {
        if (typeof options !== 'object') {
            this.printError('Options should be a object.');
            return;
        }
        if (!options.appKey) {
            this.printError('Cannot set options, some necessary options are lost.');
            return;
        }
        if (!options.injection) {
            options.injection = false;
            return;
        }
        this.options = options;
    }
    interceptConsole = () => {
        this.privateError = console.error;
        console.error = (err) => {
            this.submitGeneral(err);
            this.privateError.apply(console, err);
        };
    }
}

const lognet = new Lognet();
window.addEventListener('load', () => {
    lognet.init();
});

module.exports = lognet;
module.exports.default = lognet;
