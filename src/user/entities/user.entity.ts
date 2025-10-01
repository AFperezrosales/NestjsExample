import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { EnumRole } from "./EnumRole";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    dateBirth: Date;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;


    @Column({
        type: 'enum',
        enum: EnumRole,
        default: EnumRole.USER
    })
    role: EnumRole;

    @DeleteDateColumn()
    deleteAt: Date;
}
