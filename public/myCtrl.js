app.controller("myCtrl", function($scope){
    $scope.name = "Example McExamply";
    $scope.lollipops = [];/* = [
        {flavor:"Blueberry", color:"Blue", votes:4},
        {flavor:"Corn", color:"Yellow", votes:0},
        {flavor:"Watermelon", color:"Red", votes:4},
        {flavor:"Cherry Coke", color:"Brown", votes:5}
    ]*/
    $scope.initPage = function(){
        // Initialize Cloud Firestore through Firebase
        firebase.initializeApp({
        apiKey: "AIzaSyDg5b8uoC0l6V1vEZGObykGQILfi-GhQmY",
        authDomain: "personal-website-b3fef.firebaseapp.com",
        projectId: "personal-website-b3fef"
        });

        $scope.db = firebase.firestore();
        
        $scope.refreshList();
    };
/* One time code used to load documents into firebase
    $scope.loadDocuments = function(){
        for(var i = 0;i<$scope.lollipops.length;i++){
            console.log("adding" + $scope.lollipops[i]);
            $scope.db.collection("lollipop-flavors").add(
                $scope.lollipops[i])
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        }
    }
*/

    $scope.addFlavor = function(){
        $scope.db.collection("lollipop-flavors").add(
            {flavor:$scope.flavor,color:$scope.color,votes:0}
        )
        .then((docRef) => {
            $scope.refreshList();
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    $scope.refreshList = function(){
        $scope.db.collection("lollipop-flavors").get().then((querySnapshot) => {
            $scope.lollipops = [];
            querySnapshot.forEach((doc) => {
                var lolli = doc.data();
                lolli.id = doc.id;
                $scope.lollipops.push(lolli);
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
            })
            $scope.$apply();
        });
    }

    $scope.upVote = function(x){
        x.votes++;
        $scope.db.collection("lollipop-flavors").doc(x.id).update({
            "votes":x.votes
        })
    }
    $scope.downVote = function(x){
        x.votes--;
        $scope.db.collection("lollipop-flavors").doc(x.id).update({
            "votes":x.votes
        })
    }
});