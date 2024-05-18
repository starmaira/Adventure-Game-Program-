#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

///classes of player and oponent///
class Player{
    name:string
    fuel:number=100
    constructor(name:string){
        this.name=name
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
    fuelIncrease(){
        let fuel = this.fuel - 25
        this.fuel =  fuel
    }
}
class Oponent{
    name:string
    fuel:number=100
    constructor(name:string){
        this.name=name
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
}
//take name of player and oponent from user//
let player = await inquirer.prompt([{
    name:"name",
    type:"input",
    message:"Enter your name:"
}])
// console.log(player.name);

let oponent = await inquirer.prompt
([
    {
        name:"select",
        type:"list",
        choices:["Assasin","Skeleton","Zombies","Warrior"]
    }
]);

//Gather data from user//
let p1 = new Player(player.name);
let p2 = new Oponent(oponent.select);
do{
    ///Assasin//////
    if (oponent.select=="Assasin"){
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(p2.name)}`);
    let ask = await inquirer.prompt([
    {
          name:"option",
          type:"list",
          message:"choose your task",
          choices:["Attack","Drink Potion","Run For Your Life"]
    }
 ]);
 if(ask.option == "Attack")
    {
      let num = Math.floor(Math.random()*2)
     if (num>0)
        {
          p1.fuelDecrease()
          console.log(`${chalk.bold.red(p1.name)} fuel = ${chalk.bold.yellowBright(p1.fuel)}`)
         console.log(`${chalk.bold.green(p2.name)} fuel = ${chalk.bold.greenBright(p2.fuel)}`)
         if (p1.fuel<= 0){
            console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!!!"))
            process.exit()
          }
        }
     if(num <= 0)
        {
           p2.fuelDecrease()
          console.log(`${chalk.bold.red(p2.name)} fuel = ${p2.fuel}`)
          console.log(`${chalk.bold.red(p1.name)} fuel = ${p1.fuel}`)
          if (p2.fuel<= 0){
            console.log(chalk.green.bold.italic("You Won, Congratulations!!!"))
            process.exit()
        }
       console.log("You have attacked the Assasin");
       }
     if(ask.option=="Drink Potion")
     {
      p1.fuelIncrease()

     console.log(chalk.bold.green(`You Drank Health Potion now Your Fuel Is ${p1.fuel}`));
     }
     if(ask.option=="Run For Your Life")
     {
      console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!!!"))
      process.exit()
     }
    }}
//////Skeleton//////
    if (oponent.select=="Skeleton"){
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(p2.name)}`);
        let ask = await inquirer.prompt([
        {
              name:"option",
              type:"list",
              message:"choose your task",
              choices:["Attack","Drink Potion","Run For Your Life"]
        }
     ]);
     if(ask.option == "Attack")
        {
          let num = Math.floor(Math.random()*2)
         if (num>0)
            {
              p1.fuelDecrease()
              console.log(`${chalk.bold.red(p1.name)} fuel = ${chalk.bold.yellowBright(p1.fuel)}`)
             console.log(`${chalk.bold.green(p2.name)} fuel = ${chalk.bold.greenBright(p2.fuel)}`)
             if (p1.fuel<= 0){
                console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!!!"))
                process.exit()
              }
            }
         if(num <= 0)
            {
               p2.fuelDecrease()
              console.log(`${chalk.bold.red(p2.name)} fuel = ${p2.fuel}`)
              console.log(`${chalk.bold.red(p1.name)} fuel = ${p1.fuel}`)
              if (p2.fuel<= 0){
                console.log(chalk.green.bold.italic("You Won, Congratulations!!!"))
                process.exit()
            }
           console.log("You have attacked the Assasin");
           }
         if(ask.option=="Drink Potion")
         {
          p1.fuelIncrease()
    
         console.log(chalk.bold.green(`You Drank Health Potion now Your Fuel Is ${p1.fuel}`));
         }
         if(ask.option=="Run For Your Life")
         {
          console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!!!"))
          process.exit()
         }
        }}
    ////Zombies/////
        if (oponent.select=="Zombies"){
            console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(p2.name)}`);
            let ask = await inquirer.prompt([
            {
                  name:"option",
                  type:"list",
                  message:"choose your task",
                  choices:["Attack","Drink Potion","Run For Your Life"]
            }
         ]);
         if(ask.option == "Attack")
            {
              let num = Math.floor(Math.random()*2)
             if (num>0)
                {
                  p1.fuelDecrease()
                  console.log(`${chalk.bold.red(p1.name)} fuel = ${chalk.bold.yellowBright(p1.fuel)}`)
                 console.log(`${chalk.bold.green(p2.name)} fuel = ${chalk.bold.greenBright(p2.fuel)}`)
                 if (p1.fuel<= 0){
                    console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!!!"))
                    process.exit()
                  }
                }
             if(num <= 0)
                {
                   p2.fuelDecrease()
                  console.log(`${chalk.bold.red(p2.name)} fuel = ${p2.fuel}`)
                  console.log(`${chalk.bold.red(p1.name)} fuel = ${p1.fuel}`)
                  if (p2.fuel<= 0){
                    console.log(chalk.green.bold.italic("You Won, Congratulations!!!"))
                    process.exit()
                }
               console.log("You have attacked the Assasin");
               }
             if(ask.option=="Drink Potion")
             {
              p1.fuelIncrease()
        
             console.log(chalk.bold.green(`You Drank Health Potion now Your Fuel Is ${p1.fuel}`));
             }
             if(ask.option=="Run For Your Life")
             {
              console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!!!"))
              process.exit()
             }
            }}
//////Warrior///////
            if (oponent.select=="Warrior"){
                console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(p2.name)}`);
                let ask = await inquirer.prompt([
                {
                      name:"option",
                      type:"list",
                      message:"choose your task",
                      choices:["Attack","Drink Potion","Run For Your Life"]
                }
             ]);
             if(ask.option == "Attack")
                {
                  let num = Math.floor(Math.random()*2)
                 if (num>0)
                    {
                      p1.fuelDecrease()
                      console.log(`${chalk.bold.red(p1.name)} fuel = ${chalk.bold.yellowBright(p1.fuel)}`)
                     console.log(`${chalk.bold.green(p2.name)} fuel = ${chalk.bold.greenBright(p2.fuel)}`)
                     if (p1.fuel<= 0){
                        console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!!!"))
                        process.exit()
                      }
                    }
                 if(num <= 0)
                    {
                       p2.fuelDecrease()
                      console.log(`${chalk.bold.red(p2.name)} fuel = ${p2.fuel}`)
                      console.log(`${chalk.bold.red(p1.name)} fuel = ${p1.fuel}`)
                      if (p2.fuel<= 0){
                        console.log(chalk.green.bold.italic("You Won, Congratulations!!!"))
                        process.exit()
                    }
                   console.log("You have attacked the Assasin");
                   }
                 if(ask.option=="Drink Potion")
                 {
                  p1.fuelIncrease()
            
                 console.log(chalk.bold.green(`You Drank Health Potion now Your Fuel Is ${p1.fuel}`));
                 }
                 if(ask.option=="Run For Your Life")
                 {
                  console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!!!"))
                  process.exit()
                 }
                }}  
}
while(true)