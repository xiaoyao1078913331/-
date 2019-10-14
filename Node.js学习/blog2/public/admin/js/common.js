function serializeToJson(form){
    const result={};
   const f=form.serializeArray();
   f.forEach((iteams)=>{
      result[iteams.name]=iteams.value;
   })
    return result;
}