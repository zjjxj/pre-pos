function create_updated_collection(collection_a, object_b) {
  //在这里写入代
  var t=0
   for(var i=0;i<object_b.value.length;i++){
  		for(var j=0;j<collection_a.length;j++){
  			if(object_b.value[i]==collection_a[j].key)
  				{t=parseInt(collection_a[j].count/3);
  				collection_a[j].count-=t;}
		}

   }
   
   return collection_a;
}
