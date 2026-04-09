import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateEmailForwardingChannelInput')
export class CreateEmailForwardingChannelInput {
  @Field()
  handle: string;
}
