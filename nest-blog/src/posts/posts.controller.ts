import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

class CreatePostDto {
  @ApiProperty({ description: '帖子标题' })
  title: string
  @ApiProperty({ description: '帖子内容' })
  content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '显示博客列表' })
  index(): Array<any> {
    return [{ id: 2 }];
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  create(@Body() body: CreatePostDto): any {
    return body
  }

  @Get(':id')
  @ApiOperation({ summary: '博客详情' })
  detail(): any {
    return {
      id: '1',
    };
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑详情' })
  update(@Param('id') id: string, @Body() body: CreatePostDto): any {
    return {
      success: true
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  remove(@Param() id: string) {
    return {
      success: true
    }
  }
}
