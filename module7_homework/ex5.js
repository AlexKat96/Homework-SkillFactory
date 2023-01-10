let totalPowerArray = [];

class ElectricalDevices {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.voltage = 220;
    this.connect = false;
  }
  
  turnOn() {
  console.log(this.name + " is turn on");
  this.connect = true;
  }
  
  turnOff() {
  console.log(this.name + " is turn off");
  this.connect = false;
  }
  
  getPower() {
  return this.connect ? this.power : 0;
  }
}

class pc extends ElectricalDevices {
  constructor(name, power) {
    super(name, power);
    this.ram = 16
  }
}

class lamp extends ElectricalDevices {
  constructor(name, power) {
    super(name, power);
    this.typeLamp = "led";
  }
}

totalPowerArray.push(pc1 = new pc("pc1", 500));
totalPowerArray.push(lamp1 = new lamp("deskLamp1", 40));
totalPowerArray.push(pc2 = new pc("pc2", 300));
totalPowerArray.push(lamp2 = new lamp("deskLamp2", 60));

pc1.turnOn();
lamp1.turnOff();
pc2.turnOff();
lamp2.turnOn();

function totalPower () {
  let summPower = 0;
  for (let i = 0; i < totalPowerArray.length; i++) {
    if(totalPowerArray[i].connect) summPower += totalPowerArray[i].power;
  }
  console.log("total power is " + summPower + " W");
}

totalPower();