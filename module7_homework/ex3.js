function objectNotProto (nameObject) {
    nameObject = Object.create(null);
    console.log(typeof nameObject);
  }
  
  objectNotProto("testObject")