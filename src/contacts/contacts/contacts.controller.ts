import { Controller, Get } from '@nestjs/common';
import { Contact } from '../entity/contact.entity';
import { ContactsService } from '../contacts.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) { }

  @Get()
  async findAlll(){
    return this.contactsService.findAlll();
  }

  @Post('create')
  async create(@Body() contactData: Contact){
    return this.contactsService.create(contactData);
  }

  @Put(':id/update')
  async updateee(@Param() id:number, @Body() contactData: Contact){
    contactData.id = id;
    return this.contactsService.updateee(contactData);
  }

  @Delete(':id/delete')
    async delete(@Param() id){
      return this.contactsService.delete(id);
    }  
}


