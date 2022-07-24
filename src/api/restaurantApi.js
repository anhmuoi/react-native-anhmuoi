const { default: axios } = require('axios');

const restaurantApi = {
    async getAll() {
        return axios
            .get(
                `https://zezx3haz.api.sanity.io/v2021-10-21/data/query/production?query=%20%20%20*%5B_type%20%3D%3D%20%22featured%22%5D%20%7B%0A%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20restaurants%5B%5D%20-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20%20%20dishes%5B%5D%20-%3E%20%2C%0A%20%20%20%20%20%20%20%20%20%20type%20-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20`
            )
            .catch((error) => console.log(error));
    },
};

export default restaurantApi;
