let totalPowerArray = [];

function ElectricalDevices () {
  this.voltage = 220,
  this.connect = false
}

ElectricalDevices.prototype.turnOn = function () {
  console.log(this.name + " is turn on");
  this.connect = true;
}

ElectricalDevices.prototype.turnOff = function () {
  console.log(this.name + " is turn off");
  this.connect = false;
}

ElectricalDevices.prototype.getPower = function() {
  return this.connect ? this.power : 0;
}

function pc (name, power) {
  this.name = name,
  this.power = power,
  this.ram = 16
}

function lamp (name, power) {
  this.name = name,
  this.power = power,
  this.typeLamp = "led"
}

pc.prototype = new ElectricalDevices();
lamp.prototype = new ElectricalDevices();

totalPowerArray.push(pc1 = new pc("pc1", 500));
totalPowerArray.push(lamp1 = new lamp("deskLamp1", 40));
totalPowerArray.push(pc2 = new pc("pc2", 300));
totalPowerArray.push(lamp2 = new lamp("deskLamp2", 60));

pc1.turnOn();
lamp1.turnOn();
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