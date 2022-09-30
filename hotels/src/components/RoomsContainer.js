
import React from 'react'
import RoomsFilter from './RoomFilter.js'
import RoomsList from './RoomList'
import { withRoomConsumer } from '../context/roomContext.js'
import Loading from './Loading'

function RoomContainer({context}){
  const { loading, sortedRooms, rooms} =context;
  if(loading){
              return <Loading />
            }
  return ( <div>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
           </div>);

          }
        
export default withRoomConsumer(RoomContainer);














// import React from 'react'
// import RoomsFilter from './RoomFilter.js'
// import RoomsList from './RoomList'
// import { RoomConsumer } from '../context.js'
// import Loading from './Loading'

// export default function RoomsContainer() {
//   return (<>
//   <RoomConsumer>
//     {
//       (value) => {
//         const { loading, sortedRooms, rooms} =value
//         if(loading){
//           return <Loading />
//         }
//         return  <div>RoomsContainer
//         <RoomsFilter rooms={rooms}/>
//         <RoomsList rooms={sortedRooms}/>
//         </div>
//       }
//     }
//   </RoomConsumer>
   
//     </>
//   )
// }
