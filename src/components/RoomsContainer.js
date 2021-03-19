import React from 'react';
import { withRoomConsumer } from '../context';
import Loading from './Loading';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer } from '../context';
// import Loading from './Loading';

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sotredRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             hello from rooms container...
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sotredRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
