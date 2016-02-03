var myFirebaseRef = new Firebase("https://assignmentfirebase.firebaseio.com/");
		var hashid=window.location.hash.substring(1);
		var newsText;
		
		if(hashid=="news1")
		{
			  myFirebaseRef.child("textdemo").on("value", function(snapshot) {
			  newsText=snapshot.val();
			  document.getElementById('news1').innerHTML=newsText;
			});
		}
		else if(hashid=="news2")
		{
			  myFirebaseRef.child("textdemo2").on("value", function(snapshot) {
			  newsText=snapshot.val();
			  document.getElementById('news1').innerHTML=newsText;
			});
		}
		else if(hashid=="news3")
		{
			  myFirebaseRef.child("textdemo3").on("value", function(snapshot) {
			  newsText=snapshot.val();
			  document.getElementById('news1').innerHTML=newsText;
			});
		}
		else if(hashid=="news4")
		{
			  myFirebaseRef.child("textdemo4").on("value", function(snapshot) {
			  newsText=snapshot.val();
			  document.getElementById('news1').innerHTML=newsText;
			});
		}