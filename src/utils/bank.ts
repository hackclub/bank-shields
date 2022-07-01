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
	'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><mask id="mask0_143:14" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" fill-rule="evenodd" d="M16 32C28.8 32 32 28.8 32 16C32 3.2 28.8 0 16 0C3.2 0 0 3.2 0 16C0 28.8 3.2 32 16 32Z" clip-rule="evenodd"/></mask><g mask="url(#mask0_143:14)"><rect width="32" height="32" fill="url(#paint0_radial_143:14)"/><path stroke="url(#paint1_radial_143:14)" stroke-width="1.75" d="M31.125 16C31.125 22.4063 30.303 26.0595 28.1813 28.1813C26.0595 30.303 22.4063 31.125 16 31.125C9.59375 31.125 5.94046 30.303 3.81872 28.1813C1.69697 26.0595 0.875 22.4063 0.875 16C0.875 9.59375 1.69697 5.94046 3.81872 3.81872C5.94046 1.69697 9.59375 0.875 16 0.875C22.4063 0.875 26.0595 1.69697 28.1813 3.81872C30.303 5.94046 31.125 9.59375 31.125 16Z"/><g filter="url(#filter0_dii_143:14)"><path fill="#fff" fill-rule="evenodd" d="M16.0003 8.018C15.9593 8.032 15.8963 8.056 15.8063 8.096C15.5673 8.199 15.2832 8.347 14.9183 8.556C14.1762 8.98 13.2473 9.579 12.2023 10.317C10.9954 11.1683 10.4485 11.5969 9.76695 12.1311L9.76693 12.1311L9.76692 12.1311C9.26201 12.5269 8.68316 12.9806 7.70725 13.707C7.31725 14.098 6.68325 14.098 6.29325 13.707C5.90225 13.317 5.90225 12.683 6.29325 12.293C8.5005 10.5 8.89925 10.201 11.0483 8.683C12.1283 7.921 13.1373 7.27 13.9263 6.819C14.3273 6.59 14.7063 6.394 15.0033 6.264C15.2653 6.149 15.6423 6 16.0003 6C16.3583 6 16.7353 6.149 16.9973 6.264C17.2943 6.394 17.6733 6.59 18.0743 6.819C18.8632 7.27 19.8723 7.921 20.9523 8.683C23.1012 10.201 23.5 10.5 25.7073 12.293C26.0983 12.683 26.0983 13.317 25.7073 13.707C25.3173 14.098 24.6833 14.098 24.2932 13.707C23.3173 12.9806 22.7385 12.5269 22.2336 12.1311C21.552 11.5969 21.0051 11.1683 19.7983 10.317C18.7533 9.579 17.8243 8.98 17.0823 8.556C16.7173 8.347 16.4333 8.199 16.1943 8.096C16.1043 8.056 16.0413 8.032 16.0003 8.018ZM7 24C7 23.448 7.448 23 8 23H24C24.552 23 25 23.448 25 24C25 24.552 24.552 25 24 25H8C7.448 25 7 24.552 7 24ZM15 21C15 21.552 15.448 22 16 22C16.552 22 17 21.552 17 21V14C17 13.448 16.552 13 16 13C15.448 13 15 13.448 15 14V21ZM21 22C20.448 22 20 21.552 20 21V14C20 13.448 20.448 13 21 13C21.552 13 22 13.448 22 14V21C22 21.552 21.552 22 21 22ZM10 21C10 21.552 10.448 22 11 22C11.552 22 12 21.552 12 21V14C12 13.448 11.552 13 11 13C10.448 13 10 13.448 10 14V21Z" clip-rule="evenodd"/></g></g><defs><filter id="filter0_dii_143:14" width="22.5" height="21.75" x="4.75" y="5.5" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation=".625"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_143:14"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_143:14" mode="normal" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-.5"/><feGaussianBlur stdDeviation=".25"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="shape" mode="normal" result="effect2_innerShadow_143:14"/><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-.5"/><feGaussianBlur stdDeviation=".5"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.215686 0 0 0 0 0.313726 0 0 0 0.5 0"/><feBlend in2="effect2_innerShadow_143:14" mode="normal" result="effect3_innerShadow_143:14"/></filter><radialGradient id="paint0_radial_143:14" cx="0" cy="0" r="1" gradientTransform="translate(16) rotate(90) scale(14)" gradientUnits="userSpaceOnUse"><stop stop-color="#FF7184"/><stop offset="1" stop-color="#EC3750"/></radialGradient><radialGradient id="paint1_radial_143:14" cx="0" cy="0" r="1" gradientTransform="translate(16) rotate(90) scale(16)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE4E8"/><stop offset="1" stop-color="#FEC2CA"/></radialGradient></defs></svg>';
