function count_same_elements(collection) {
  //在这里写入代码
  var result=[];
  var length=1;
  result.push({name:collection[0],summary:1})
  for(var i=1;i<collection.length;i++){
  	var str=collection[i].split("");
  	var l=str.length;
  	if(l===1){
  	for(var j=0;j<length;j++){
        if(result[j].name===collection[i])
         {	
         	result[j].summary++;
        	break;
         }	
  	}
  	if(j===length)
  	{
  		length++;
  		result.push({name:collection[i],summary:1})
  	}
  }
  else{
  		var  temp=collection[i].split("");
  		var str="";
  		for(var k=2;k<temp.length;k++)
  		{
  			if(temp[k]>="0"&&temp[k]<="9")
  			{
  				str+=temp[k];
  			}
  		}
  		collection[i]=temp[0];
  		for(var j=0;j<length;j++){
        if(result[j].name===collection[i])
         {	
         	result[j].summary+=parseInt(str);
        	break;
         }	
  	}
  	if(j===length)
  	{
  		length++;
  		result.push({name:collection[i],summary:parseInt(str)})
  	}

   }
  }	
  return result;
}
