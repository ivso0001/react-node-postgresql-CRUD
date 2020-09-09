import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { User as IUser } from '../../interfaces/user'

@Entity({
    name: 'users'
})
export class User implements IUser {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        type: 'varchar',
        length: 30,
        nullable: false,
    })
    name!: string

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
    })
    email!: string

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp with time zone',
        nullable: false,
    })
    createdAt!: Date

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp with time zone',
        nullable: false,
    })
    updatedAt!: Date
}