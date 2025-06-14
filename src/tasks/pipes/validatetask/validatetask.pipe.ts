import { 
  HttpException,
  HttpStatus,
  Injectable, 
  PipeTransform 
} from '@nestjs/common';

interface ParameterTask {
  id: number
}

@Injectable()
export class ValidatetaskPipe implements PipeTransform {
  transform(value: ParameterTask) {
    console.log('value', value);

    if (isNaN(value.id)) {
      throw new HttpException('El campo id debe ser numero', HttpStatus.BAD_REQUEST);
    }


    return value;
  }
}
