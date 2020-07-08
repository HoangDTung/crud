import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entity/contact.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>,
    ) { }

    async findAlll(){
        return await this.contactRepository.find();
    }

    async create(contact: Contact){
        return await this.contactRepository.save(contact);
    }

    async updateee(contact: Contact){
        return await this.contactRepository.update(contact.id, contact);
    }

    async delete(id:number){
        return await this.contactRepository.delete(id);
    }
}

