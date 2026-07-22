import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto.js';
export class UpdateTaskDto extends PartialType(CreateTaskDto) {
}
//# sourceMappingURL=update-task.dto.js.map