import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { IsNotEmpty } from 'class-validator';
import { InjectModel } from 'nestjs-typegoose';
import { PostSchema } from './post.model';

class CreatePostDto {
  @ApiProperty({ description: '帖子标题', example: '帖子标题' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string
  @ApiProperty({ description: '帖子内容', example: '帖子内容' })
  content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  constructor(@InjectModel(PostSchema) private readonly PostModel: ModelType<PostSchema>) {

  }
  @Get()
  @ApiOperation({ summary: '显示博客列表' })
  async index() {
    return await this.PostModel.find()
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  async create(@Body() createPostsDto: CreatePostDto) {
    await this.PostModel.create(createPostsDto)
    return createPostsDto
  }

  @Get(':id')
  @ApiOperation({ summary: '博客详情' })
  async detail(@Param('id') id: string) {
    return await this.PostModel.findById(id)
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑详情' })
  async update(@Param('id') id: string, @Body() updatePost: CreatePostDto) {
    await this.PostModel.findByIdAndUpdate(id, updatePost)
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  async remove(@Param('id') id: string) {
    await this.PostModel.findByIdAndDelete(id)
  }
}
