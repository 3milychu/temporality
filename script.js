d3.csv('https://raw.githubusercontent.com/3milychu/temporality/master/data/data.csv')
  .then(function(data) {
      loadEntries("litreview", data);
      showDetails(data);
      selectNav(0);

      var nav = document.querySelectorAll('li');
      nav[0].addEventListener("click", function(){
      	selectNav(0);
      	loadEntries("litreview",data);
      	showDetails(data);
      });
      nav[1].addEventListener("click", function(){
      	selectNav(1);
      	loadEntries("design",data);
      	showDetails(data);
      });
       nav[2].addEventListener("click", function(){
      	selectNav(2);
      	loadEntries("playground",data);
      	showDetails(data);
      });

  })

function loadEntries(type, data) {
	var body = document.querySelector('#cards');
	body.innerHTML="";
	entry_data = data.filter(function(d){return d.type ==type;});
	for(i=0;i<entry_data.length;i++){
		var card_holder = document.createElement('div');
		card_holder.className="card-holder";
		card_holder.id="entry"+i;
		var fimg = document.createElement('img');
		fimg.setAttribute('src',"assets/" + data[i]['image']);

		var info = document.createElement('div');
		info.className="info";
		var title = document.createElement('h2');
		title.innerHTML=data[i]['title'];
		var subtitle = document.createElement('p');
		subtitle.innerHTML=data[i]['subtitle'];

		card_holder.appendChild(fimg);
		card_holder.appendChild(info);
		info.appendChild(title);
		info.appendChild(subtitle)
		body.appendChild(card_holder);
	}
	
}

function clearDetails() {
	var details = document.querySelector('.details');
	var title = details.querySelector('h1');
	var subtitle = details.queryselector('h2');
	var desc = details.querySelector('p');
	var img = details.querySelector('img');
	img.setAttribute('src',"");
	title.innerHTML="";
	subtitle.innerHTML="";
	desc.innerHTML="";
}

function showDetails(data) {
	var entries = document.querySelectorAll('.card-holder');
	var details = document.querySelector('.details');
	var content = document.querySelector('.content-holder');
	var img = details.querySelector('img');
	var title = content.querySelector('h1');
	var subtitle = content.querySelector('h2')
	var desc = content.querySelector('p');
	var close = content.querySelector('close');
	console.log(entries.length);
	for (i=0;i<entries.length;i++){
		entries[i].onclick=function() {
			console.log('this works');
			details.style.display="block";
			ref = this.id;
			ref = parseInt(ref.split("y")[1]);
			img.setAttribute('src',"assets/"+data[ref]['image']);
			title.innerHTML = data[ref]['title'];
			subtitle.innerHTML = data[ref]['subtitle'];
			desc.innerHTML = data[ref]['description'];
		}
	}
	close.addEventListener('click',function() {
		details.style.display="none";
	})
}

function selectNav(number) {
	var nav = document.querySelectorAll('li');
	for(i=0;i<nav.length;i++){
		nav[i].style.borderBottom="";
		nav[i].style.marginBottom="0%";
	}
	nav[number].style.borderBottom="0.2em solid black";
	nav[number].style.marginBottom="5%";

}