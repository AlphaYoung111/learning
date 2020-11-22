import { Module } from '@nestjs/common';
import { post } from '@typegoose/typegoose';
import { TypegooseModule } from 'nestjs-typegoose';
import { PostSchema } from './post.model';
import { PostsController } from './posts.controller';

@Module({
  imports: [
    TypegooseModule.forFeature([PostSchema])
  ],
  controllers: [PostsController],
})
export class PostsModule { }
