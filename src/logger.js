class MissionLogger {
    debug = (content, missionId) => {
        this.log('debug', content, missionId);
    }
    info = (content, missionId) => {
        this.log('info', content, missionId);
    }
    warn = (content, missionId) => {
        this.log('warn', content, missionId);
    }
    error = (content, missionId) => {
        this.log('error', content, missionId);
    }
    // params: (type, content)
    log = (type, content, missionId) => {
        this.submit(missionId ? missionId : this.parent.options.missionId, type, content);
    }
    submit = (missionId, type, content) => {
        if (!this.parent || !this.parent.options.appKey) {
            this.printError('App key is not set.');
            return;
        }
        if (!missionId) {
            this.printError('Mission ID is not set.');
            return;
        }
        fetch('https://lognet.pwp.app/api/submit/mission', {
            method: 'POST',
            body: JSON.stringify({
                appKey: this.parent.options.appKey,
                type,
                missionId: missionId,
                path: window.location.pathname,
                content: content,
                ...this.parent.getClientInfo()
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        }).catch((e) => {
            if (this.parent && this.parent.debug) {
                this.printError(e);
            }
        });
    }
    printError = (err) => {
        if (this.parent && this.parent.privateError) {
            this.parent.privateError.apply(console, err);
        } else {
            console.log(err);
        }
    }
    setPrivateError = (privateError) => {
        this.privateError = privateError;
    }
    setKey = (appKey) => {
        this.appKey = appKey;
    }
    setMission = (missionId) => {
        this.missionId = missionId;
    }
    setDebug = (flag) => {
        this.flag = flag;
    }
}

export default MissionLogger;