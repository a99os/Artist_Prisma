import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
