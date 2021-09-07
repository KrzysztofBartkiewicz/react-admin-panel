const gapi = window.gapi;

export const fetchThreads = async () => {
  const threadsPromisesArr = [];

  const gmailApi = gapi.client.gmail.users;
  const threadsList = await gmailApi.threads.list({
    userId: 'me',
    maxResults: 500,
    includeSpamTrash: true,
  });

  threadsList.result.threads.forEach(({ id }) =>
    threadsPromisesArr.push(gmailApi.threads.get({ userId: 'me', id }))
  );

  const threads = await Promise.all(threadsPromisesArr);

  return threads;
};
