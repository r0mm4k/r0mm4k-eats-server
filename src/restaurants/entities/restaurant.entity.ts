import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant {
  @Field((type) => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field((type) => Boolean, { defaultValue: false })
  @Column({ default: false })
  @IsOptional()
  @IsBoolean()
  isVegan: boolean;

  @Field((type) => String)
  @Column()
  @IsString()
  address: string;
}
