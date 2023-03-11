class Ajaxios {

    constructor() {
        this.timeoutSeconds = 10;
    }

    #timeout(seconds) {
        return new Promise(function(_, reject) {
            setTimeout(() => {
                reject(`Request took too long! Timeout after ${seconds} seconds.`);
            }, seconds * 1000);
        });
    }

    async get(url) {
        try {
            const fetchRequest = fetch(url);
            const response = await Promise.race([
                fetchRequest,
                this.#timeout(this.timeoutSeconds)
            ]);
            const data = await response.json();
            if (!response.ok) throw new Error(`${data.message} ${response.status}`);
            return data;
        } catch(err) {
            throw err;
        }
    }
}

export default new Ajaxios();
