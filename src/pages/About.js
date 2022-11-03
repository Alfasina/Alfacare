import React from 'react';
import { Operations } from './aboutdata';
import './about.css'




const Item=({id,desc,topic})=> {return (<><br/>{id}.<span style={{color:'black', fontWeight:'550'}}>{` ${topic}  `}</span >{desc}</>)  }

const About = () => {
  return (
    <div className='aboutdiv'>
      <div style={{lineHeight:'1.6'}}>
        <h3 >INTRODUCTION</h3>
        <p className='Aparagraph'>Alfacare is an independent, non-profit making. Non-government organisations (NGO) that is committed to the peaceful co-existence of the people of Nigeria. The need for peace in any society can not be over emphasised. Meaningful progress can easily be achieved in an atmosphere of peace.
        <br/>
            For a long time, a continues peace has eluded our country. The crisis that have made appearance in Nigeria range from tribal, communal, religious, social and other various differences of which all is threat to democracy.
            <br/>
            Inspite of attempts made to established a religable peace, we have found out that our dream of peace is yet to be fully realized. The situation therefore required every hand to be on deck for the glory of Nigeria to be really achieved.
            <br/>
            Alfacare organization was born out of the need to see that our country lost her garb of violence for that of peace. As Nigerian happily joined the league of democratic nations, it is pertinent to know that no nation can succeed or attain meaningful developments under a chaotic and violent condition. To protect our nascent democracy from collapsing, we must ensure that peace and justice reign. 
            <br/>
            Our economy will be in shambles without peace and this will necessitate our inability to provide the basic social needs of our people. Besides the threat of retrogressive military intervention 
            Will loom large.
            <br/>Alfacare is going to work for peace on a continuous basis what ever the situation on the ground is. Without peace, we shall work to bring it, with peace, we shall work to maintain it. This is the mission statement of Alfacare Organization.
            </p>
            <h3 >OBJECTIVES</h3>
            <p className='Aparagraph' >To facilitate the attainment of a healthy democracy, understanding for economy and social developments under peaceful atmosphere, Alfa Care shall:</p>

            <h3 >MODE OF OPERATION</h3>
            <p className='Aparagraph' >Alfa care has lined up several operational strategies to be used in achieving its aims. All of them are geared toward educating, appealing, and persuading the minds of our people to see peace as paramount for personal, economic, and spiritual development.
            <br/>
Among the strategies are:
{Operations.map((operation=><Item {...operation} key={operation.id}/>))}
</p>
      </div>
    </div>
  );
}

export default About;
