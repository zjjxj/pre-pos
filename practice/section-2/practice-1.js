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
  		result.push({key:collection[i],count:1})
  	}
  }	
  return result;
}
