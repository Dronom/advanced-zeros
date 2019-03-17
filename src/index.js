module.exports = function getZerosCount(number, base) {
  const decompBase = [];
  decompBase[base] = 0;
  decompBase.fill(0);
  let zeros = 0;
  let i = 2;

  for(let tempBase = base; tempBase>1; i++){
    while(tempBase % i == 0){
      decompBase[i]++;
      tempBase /= i;
    }
  }

  decompBase.splice(i,decompBase.length);

  for(i = 2; i < decompBase.length; i++){
    if(decompBase[i] > 0){
      let power = 1;
      while((number/Math.pow(i,power)) > 1){
        zeros += Math.floor(number / (Math.pow(i,power)));
        power++;
      }
      zeros = Math.floor(zeros / decompBase[i]);
      i++;
      break;
    }
  }


  for(let temp = 0; i < decompBase.length; i++){
    if(decompBase[i]>0){
      temp = 0;
      for(let power = 1; power<=decompBase[i],(number / Math.pow(i,power)) > 1 ; power++){
        temp += Math.floor(number/Math.pow(i,power));
      }
      temp = Math.floor(temp / decompBase[i]);
      if(temp < zeros) zeros = temp;
    }
    
  }

  return zeros;
}
