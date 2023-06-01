import { register } from "@minecraft/server-gametest";
import type { World, BlockLocation as _BlockLocation } from "../@types/globalThis"

declare const GameTest:  {"register": typeof register};
declare const world: World;
declare const BlockLocation: typeof _BlockLocation;

const 自动重生标识符 = "自动重生标识符";

const xboySign = "#xboySimSign#";                   ;;"假人标签";;"苦役证";;
const 主世界   = world.getDimension("overworld");
const tickWaitTimes = 20*60*60*24*365;;
const 生产任务 = [];
const 生产队的驴 = [];

try {
    {
        GameTest.
        register("假人行为", "结束", (test) => { {

            world.events.tick.subscribe(()=>{
                while(生产任务.length!==0){
                    const 任务 = 生产任务.pop();
                    生产队的驴.push({
                        驴:test.spawnSimulatedPlayer(new BlockLocation(0,2,0), `工具人-`),
                        location:任务.location,
                        dimension:任务.dimension,
                    });  "这叫生产队的驴"
                } 
            })

            // let thing  = xboyMinemcSIMlist_["销毁"].pop();
            // thing[0].runCommandAsync(thing[1]);
            // thing  = xboyMinemcSIMlist_["销毁"].pop();
            // thing[0].runCommandAsync(thing[1]);
            // thing  = xboyMinemcSIMlist_["销毁"].pop();
            // cmd(thing[0],"销毁",thing[1])


            // const 工具人 = test.spawnSimulatedPlayer(new BlockLocation(0,2,0), `工具人-`);            ;;"xboy";;
            // 工具人.addTag(xboySign);;
            // // 工具人.breakBlock(new BlockLocation(0,1,1))
            // const x = (工具人.location.x-0.5)>>0;
            // const y =  工具人.location.y>>0;
            // const z = (工具人.location.z-0.5)>>0; //for blockLocation
            // 工具人.addTag("#xyz#"+x+"#"+(y-2)+"#"+z);;
            // 工具人.addTag(自动重生标识符);
            // // 工具人.addTag(自动攻击标识符);
            // xboyTestsList[工具人.name] = test;
            // xboyTooleesList[工具人.name] = 工具人
            // // 工具人.breakBlock(new BlockLocation(+x,y-1,z))
            // 工具人们.push(工具人);;;;;
            // 工具人.runCommandAsync('gamerule domobspawning true');    ;;;"凑活解决刷怪问题";;;
            // 工具人.runCommandAsync('gamerule dodaylightcycle true');  ;;;"凑活解决时间问题";;;
            // 工具人.runCommandAsync('gamerule randomtickspeed 1');     ;;;"凑活解决tick问题";;;

            // world.events.tick.subscribe(()=>工具人.breakBlock(new BlockLocation(0,1,1)))
        } })
            .maxTicks(tickWaitTimes)
            // .maxTicks(2)
            // .maxAttempts(tickWaitTimes)
            // .requiredSuccessfulAttempts(tickWaitTimes)
            // .padding(0)
            .structureName("xboyMinemcSIM:void")
    }

} catch (err) {
    主世界.runCommandAsync(`me Core-Dump ${err}`)
}

export  {生产任务, 生产队的驴};

console.error("export  {生产任务, 生产队的驴};")