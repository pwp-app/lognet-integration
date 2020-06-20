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
        // init listener
        this.addListener();
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
                this.appKey = dom.getAttribute('key');
            }
            // init injection
            if (this.injection) {
                interceptConsole();
            }
            this.inited = true;
        }
    }
    setKey = (appKey) => {
        this.options.appKey = appKey;
        if (this.logger) {
            this.logger.setKey(appKey);
        }
    }
    setMission = (missionId) => {
        this.options.missionId = missionId;
        if (this.logger) {
            this.logger.setMission(missionId);
        }
    }
    setInjection = (injection) => {
        if (typeof injection !== 'boolean') {
            this.printError('Please set a boolean to injection option.');
            return;
        }
        this.injection = injection;
        if (!this.injection) {
            console.error = this.privateError;
            if (this.logger) {
                this.logger.setPrivateError(null);
            }
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
        if (this.logger) {
            this.logger.setDebug(flag);
        }
    }
    interceptConsole = () => {
        this.privateError = console.error;
        console.error = (err) => {
            this.submitGeneral(err);
            this.privateError.apply(console, err);
        };
        // set up logger
        if (this.logger) {
            this.logger.setPrivateError(this.privateError);
        }
    }
}

const lognet = new Lognet();
window.addEventListener('load', () => {
    lognet.init();
});

module.exports = lognet;
module.exports.default = lognet;
