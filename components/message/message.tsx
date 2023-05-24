import * as React from 'react';
import { MessageConfig } from '../../models/message-config';

export function Message({ message, type = 'info' }: MessageConfig) {
  return (
    <div className={'message ' + type}>
      <p>{message}</p>
    </div>
  );
}
