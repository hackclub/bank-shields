import axios from 'axios';

class Bank {
	private readonly baseUrl: string;
	constructor({
		baseUrl = 'https://bank.hackclub.com/api/v3',
	}: {
		baseUrl?: string;
	} = {}) {
		this.baseUrl = baseUrl;
	}

	async organization(id: string) {
		const response = await this.request(
			`${this.baseUrl}/organizations/${id}`,
			'GET'
		);
		return response.data;
	}

	private async request(endpoint: string, method = 'GET', params?: any) {
		return axios.request({
			url: endpoint,
			method,
			params,
		});
	}
}

const bank = new Bank();

export default bank;

export const SVG_LOGO =
	'<svg width="100%" height="100%" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(1.59996,0,0,1.59996,-9.59974,-8.79932)"><path d="M16,8.018C15.959,8.032 15.896,8.056 15.806,8.096C15.567,8.199 15.283,8.347 14.918,8.556C14.176,8.98 13.247,9.579 12.202,10.317C10.995,11.168 10.448,11.597 9.767,12.131L9.767,12.131C9.262,12.527 8.683,12.981 7.707,13.707C7.317,14.098 6.683,14.098 6.293,13.707C5.902,13.317 5.902,12.683 6.293,12.293C8.501,10.5 8.899,10.201 11.048,8.683C12.128,7.921 13.137,7.27 13.926,6.819C14.327,6.59 14.706,6.394 15.003,6.264C15.265,6.149 15.642,6 16,6C16.358,6 16.735,6.149 16.997,6.264C17.294,6.394 17.673,6.59 18.074,6.819C18.863,7.27 19.872,7.921 20.952,8.683C23.101,10.201 23.5,10.5 25.707,12.293C26.098,12.683 26.098,13.317 25.707,13.707C25.317,14.098 24.683,14.098 24.293,13.707C23.317,12.981 22.738,12.527 22.234,12.131C21.552,11.597 21.005,11.168 19.798,10.317C18.753,9.579 17.824,8.98 17.082,8.556C16.717,8.347 16.433,8.199 16.194,8.096C16.104,8.056 16.041,8.032 16,8.018ZM7,24C7,23.448 7.448,23 8,23L24,23C24.552,23 25,23.448 25,24C25,24.552 24.552,25 24,25L8,25C7.448,25 7,24.552 7,24ZM15,21C15,21.552 15.448,22 16,22C16.552,22 17,21.552 17,21L17,14C17,13.448 16.552,13 16,13C15.448,13 15,13.448 15,14L15,21ZM21,22C20.448,22 20,21.552 20,21L20,14C20,13.448 20.448,13 21,13C21.552,13 22,13.448 22,14L22,21C22,21.552 21.552,22 21,22ZM10,21C10,21.552 10.448,22 11,22C11.552,22 12,21.552 12,21L12,14C12,13.448 11.552,13 11,13C10.448,13 10,13.448 10,14L10,21Z" style="fill:white;"/></g></svg>';
