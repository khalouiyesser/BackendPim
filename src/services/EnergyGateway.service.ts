/*import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class EnergyGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    console.log('Client connected: ' + client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected: ' + client.id);
  }

  @SubscribeMessage('sendEnergyData')
  handleEnergyData(client: Socket, data: any) {
    console.log('Energy data received:', data);
    // Envoyer des mises à jour en temps réel à tous les clients connectés
    this.server.emit('updateEnergyData', data);
  }
}
*/