import { getUrl } from './url'

let classes: { get, update, delete, put } = {
	get: () => {
		return new Promise((resolve, reject) => {

			$.get(getUrl('classes'), res => {
				resolve(res)
			}, 'json')

		})
	},
	update: (params, data) => {
		return new Promise((resolve, reject) => {

			$.post(getUrl('classesOne', params), data, res => {
				resolve(res)
			}, 'json')

		})
	},
	put: data => {
		return new Promise((resolve, reject) => {

			$.ajax({
				url: getUrl('classes'),
				type: 'put',
				data: data,
				dataType: 'json',
				success: res => { resolve(res) }
			})

		})
	},
	delete: params => {
		return new Promise((resolve, reject) => {
			$.ajax({
				url: getUrl('classesOne', params),
				type: 'delete',
				dataType: 'json',
				success: res => { resolve(res) }
			})
		})
	}

}







export default classes
