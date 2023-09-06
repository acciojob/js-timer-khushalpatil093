// write js code here if required
	let Time = document.getElementById('timer');
	const date = new Date();

	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth()+1).toStrinng().padStart(2, '0');
	const year = date.getFullYear();
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');
	const seconds = date.getSeconds().toString().padStrt(2, '0');

	Time.innerHTML = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;