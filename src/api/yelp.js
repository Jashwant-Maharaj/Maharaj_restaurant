import axios from 'axios'

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer RPiX6QLih9g29OYzPN0BqHZ5NGevNXj8h9KyxldqKPEtbaYSAVZiT4H3HMC3UpSfPRZkHTuihSHlayUciBFOiO6PQluFfZxQzan2LA2RQvOtrj8mIAdz8OQwczUrYHYx"
    }
});