import moment from 'moment';

const gapi = window.gapi;

export const fetchLabels = async () => {
  const gmailApi = gapi.client.gmail.users;

  const labels = await gmailApi.labels.list({ userId: 'me' });

  return labels.result.labels;
};

export const fetchThreads = async () => {
  const threadsPromisesArr = [];

  const gmailApi = gapi.client.gmail.users;
  const threadsList = await gmailApi.threads.list({
    userId: 'me',
    maxResults: 500,
  });

  threadsList.result.threads.forEach(({ id }) =>
    threadsPromisesArr.push(gmailApi.threads.get({ userId: 'me', id }))
  );

  const threads = await Promise.all(threadsPromisesArr);

  return threads.map(({ result }) => {
    const id = result.id;

    const date = moment(
      result.messages[0].payload.headers.find(
        (header) => header.name === 'Date'
      ).value,
      'ddd, DD MMM YYYY'
    ).format('ddd, D MMM YYYY');

    const from = result.messages[0].payload.headers.find(
      (header) => header.name === 'From'
    ).value;

    const subject = result.messages[0].payload.headers.find(
      (header) => header.name === 'Subject'
    ).value;

    const messagesArr = result.messages;

    return {
      id,
      date,
      subject,
      messagesArr,
      isChecked: false,
      from,
    };
  });
};

export const fetchEmailsBasicData = async () => {
  const messagesPromiseArr = [];

  const gmailApi = gapi.client.gmail.users;
  const messagesList = await gmailApi.messages.list({
    userId: 'me',
    maxResults: 500,
  });

  messagesList.result.messages.forEach(({ id }) =>
    messagesPromiseArr.push(gmailApi.messages.get({ userId: 'me', id }))
  );

  const messages = await Promise.all(messagesPromiseArr);

  const emailsBasicData = messages.map(({ result }) => {
    const headers = result.payload.headers;
    const id = result.id;

    const subject = headers.find((header) => header.name === 'Subject').value;
    const date = headers.find((header) => header.name === 'Date').value;
    const from = headers.find((header) => header.name === 'From').value;

    return {
      id,
      subject,
      date: moment(date, 'ddd, DD MMM YYYY').format('ddd, D MMM YYYY'),
      from: from
        .split(' ')
        .filter((word) => word[0] !== '<')
        .join(' '),
    };
  });

  return emailsBasicData;
};

export const fetchSingleEmail = async (id) => {
  const gmailApi = gapi.client.gmail.users;

  const singleEmail = await gmailApi.messages.get({
    userId: 'me',
    id,
  });

  return singleEmail;
};
