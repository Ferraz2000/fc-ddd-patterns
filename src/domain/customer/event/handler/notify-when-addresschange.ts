import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerChangeAddressEvent from "../customer-changeaddress.event";


export default class NotifyWhenAddressChangeHandler
implements EventHandlerInterface<CustomerChangeAddressEvent>
{
    handle(event: CustomerChangeAddressEvent): void {
        console.log(`Endereço do cliente: ${event.eventData.id}, ${event.eventData.name} alterado para: ${event.eventData.Address.toString()}`);
      }
      
}
  