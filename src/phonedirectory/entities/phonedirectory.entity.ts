import { ApiTags } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Phonedirectory {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column({nullable: true})
    lastName: string;

    @Column({nullable: true})
    age: number;

    @Column()
    phone: number;

    @Column({nullable: true,default: new Date()})
    createdAt: Date;

    @Column({nullable: true})
    updatedAt: Date;
}
