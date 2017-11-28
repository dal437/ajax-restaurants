// TODO: add your JavaScript here!

// Scope
(() => {
	const BASE_URL = 'http://localhost:3000/api';
	const $places_list = document.querySelector('#places-list');
	// Search
	const $location_search = document.querySelector('#location_search');
	const $cuisine_search = document.querySelector('select#cuisine_search');
	const $filter_btn = document.querySelector('#filterBtn');
	// New place
	const $add_btn = document.querySelector('#addBtn');
	const $input_name = document.querySelector('#name');
	const $input_location = document.querySelector('#location');
	const $input_cuisine = document.querySelector('select#cuisine_create');

	const setup_listeners = () => {
		$add_btn.addEventListener('click', e => {
			e.preventDefault();
			const data = {
				name: $input_name.value,
				cuisine: $input_cuisine.value,
				location: $input_location.value,
			};
			post_new_place(data, () => {
				render_list([data], false);
				erase_inputs();
			});
		});

		$filter_btn.addEventListener('click', e => {
			e.preventDefault();
			fetch_places({
				location: $location_search.value,
				cuisine: $cuisine_search.value,
			});
		});
	}

	
