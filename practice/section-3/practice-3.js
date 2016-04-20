function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var results=count_same_elements(collection_a);
  var a=cutOne(results,object_b);
   return a;
}
function count_same_elements(collection) {
  //在这里写入代码
  var result=[];
  var length=1;
  result.push({key:collection[0],count:1})
  for(var i=1;i<collection.length;i++){
  	for(var j=0;j<length;j++){
        if(result[j].key===collection[i])
         {	
         	result[j].count++;
        	break;
         }	
  	}
  	if(j===length)
  	{
  		length++;
  		result.push({key:collection[i],count:1});
  	}
  }	
  return result;
}


function cutOne(collection1, object) {
  //在这里写入代
  var t=0;
   for(var i=0;i<object.value.length;i++){
  		for(var j=0;j<collection1.length;j++){
  			if(object.value[i]==collection1[j].key)
  				{t=parseInt(collection1[j].count/3);
  				collection1[j].count-=t;}
		}

   }
   
   return collection1;
}

