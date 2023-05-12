/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 255 })
    birthdate: string;

    @Column({ length: 20 })
    document: string;

    @Column()
    acceptedTermsAndConditions: string;

    @Column()
    zipcode: string;

    @Column({ length: 255 })
    street: string;

    @Column({ length: 255 })
    neighborhood: string;

    @Column({ length: 255 })
    city: string;

    @Column({ length: 255 })
    state: string;

    @CreateDateColumn()
    dataCriacao: Date;

    @CreateDateColumn()
    updatedAt: Date;
}