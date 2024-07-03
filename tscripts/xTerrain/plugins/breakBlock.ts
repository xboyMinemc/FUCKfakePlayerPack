import type { SimulatedPlayer } from '@minecraft/server-gametest'
import {Dimension, Player, Vector3} from '@minecraft/server'

import {
    SimulatedPlayerEnum,
    testWorldLocation
} from '../main'
import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry'
import { getSimPlayer } from '../../lib/xboyPackage/Util'
import { world, system } from "@minecraft/server"
import SIGN from "../../lib/xboyPackage/YumeSignEnum";


export const BreakBlockSimulatedPlayerList:Set<string> = new Set()



export const commandRegistry: CommandRegistry = new CommandRegistry()

const noArgs = ({args,entity,isEntity})=>{

    if(args.length!==1)return

    if(!isEntity)return

    const SimPlayer:SimulatedPlayer = getSimPlayer.formView(entity)
    if(!SimPlayer)return

    for(const i in SimulatedPlayerEnum)
        if(SimulatedPlayerEnum[i]===SimPlayer)
            SimPlayer.addTag(SIGN.AUTO_BREAKBLOCK_SIGN)

    // console.error('[假人]内置插件'+'假人挖掘'+'执行成功')

}
commandRegistry.registerCommand('假人挖掘',noArgs)
commandRegistry.registerAlias('假人摧毁','假人挖掘')


world.afterEvents.chatSend.subscribe(({message, sender})=>{
    // const cmdArgs = CommandRegistry.parse(message)
    // if(commandRegistry.commandsList.has(cmdArgs[0]))
    //     commandRegistry.executeCommand(cmdArgs[0],{entity:sender,isEntity:true,args:cmdArgs})


    commandRegistry.execute(message,{entity:sender,isEntity:true})
    if(message==='showshowway'){
        sender.sendMessage(commandRegistry.showList().toString())
    }
})

const Vector_subtract = ({x,y,z}:Vector3, {x:u,y:v,z:w}:Vector3)=>({x:x-u,y:y-v,z:z-w})
const Vector_addition = ({x,y,z}:Vector3, {x:u,y:v,z:w}:Vector3)=>({x:x+u,y:y+v,z:z+w})
const Vector_multiplication_dot = ({x,y,z}:Vector3, u:number)=>({x:x*u,y:y*u,z:z*u})

type awa = 'awa'

// task
const breaks = (awa:awa='awa')=>
    world.getPlayers({tags:[SIGN.AUTO_BREAKBLOCK_SIGN]}).forEach( async SimPlayer => {
        // getHeadLocation
        // getViewDirection
        // 这是一会要用到的妙妙工具
        // @ts-ignore
        const man = <SimulatedPlayer>SimPlayer
        const viewDirection = man.getViewDirection()
        const headLocation = man.getHeadLocation()
        const time =  times.get(man.id) ?? 0
        const whatCanISee =  Vector_addition(headLocation, Vector_multiplication_dot(viewDirection,time % 3 + 1))
        const dimension = <Dimension>man.dimension
        dimension.spawnParticle('minecraft:endrod',whatCanISee)
        // dimension.spawnParticle('minecraft:endrod',headLocation)


        const block = dimension.getBlock(whatCanISee)
        if (block.isValid() && !block.isLiquid && !block.isAir){
            man.breakBlock(Vector_subtract(block.location, testWorldLocation))
        } else {
            times.set(man.id,time+1)
        }
    })


const times = new Map<Player["id"],number>()
system.runInterval(breaks,20) // 2 + 0 = 20

// console.error('[假人]内置插件'+commandName+'加载成功')