import axios from 'axios';

// Axios instance config

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID AjS226UbuatwBcNsf3S3jxT6MbPT2v5hVaxg3RVKo_g'
	}
});
