function sendmes() {
	var smes = document.getElementById("chatbox").value;
	document.getElementById("chatbox").value = "";
	htmlsmes = '<div style="text-align: right;">' + smes + '</div><br>';
	chatpage = document.getElementById('friendchat');
	chatpage.srcdoc += htmlsmes;
	recmes();
}


function chatframe() {
	//document.getElementById('friendchat').contentDocument.location.reload(true);
	var f = document.getElementById('friendchat');
	f.srcdoc = f.srcdoc;
	setTimeout(chatframe, 1000);
}

function recmes() {
	var docRef = db.collection("messages").doc("123");
	
	docRef.get().then(function(doc) {
		if (doc.exists) {
			var count = doc.data()[456][0];
			var r = doc.data()[456];
			if (count === 0) {
				console.log("No new messages")
			}
			else {
				for (var i = 1; i <= count; i++) {
					console.log("New mess = " + r[i]);
					htmlsmes = '<div style="text-align: left;">' + r[i] + '</div><br>';
					chatpage.srcdoc += htmlsmes;
				}
			}
		}
		else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}).catch(function(error) {
	console.log("Error getting document:", error);
	});
}
