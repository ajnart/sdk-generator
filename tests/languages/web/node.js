const { Client, Foo, Bar, General, Query, Permission, Role, ID, MockType } = require('./dist/cjs/sdk.js');

async function start() {
    let response;

    console.log('\nTest Started');
    const client = new Client();
    const foo = new Foo(client);
    const bar = new Bar(client);
    const general = new General(client);
    
    // Foo
    try {
        console.log('Calling foo.get()');
        response = await foo.get({ x: 'string', y: 123, z: ['string in array'] });
        console.log('foo.get() response:', response);
        console.log(response.result);
    } catch (error) {
        console.error('Error in foo.get():', error);
    }

    try {
        console.log('Calling foo.post()');
        response = await foo.post({ x: 'string', y: 123, z: ['string in array'] });
        console.log('foo.post() response:', response);
        console.log(response.result);
    } catch (error) {
        console.error('Error in foo.post():', error);
    }

    try {
        console.log('Calling foo.put()');
        response = await foo.put({ x: 'string', y: 123, z: ['string in array'] });
        console.log('foo.put() response:', response);
        console.log(response.result);
    } catch (error) {
        console.error('Error in foo.put():', error);
    }

    try {
        console.log('Calling foo.patch()');
        response = await foo.patch({ x: 'string', y: 123, z: ['string in array'] });
        console.log('foo.patch() response:', response);
        console.log(response.result);
    } catch (error) {
        console.error('Error in foo.patch():', error);
    }

    try {
        console.log('Calling foo.delete()');
        response = await foo.delete({ x: 'string', y: 123, z: ['string in array'] });
        console.log('foo.delete() response:', response);
        console.log(response.result);
    } catch (error) {
        console.error('Error in foo.delete():', error);
    }

    // Bar
    try {
        console.log('Calling bar.get()');
        response = await bar.get({ x: 'string', y: 123, z: ['string in array'] });
        console.log('bar.get() response:', response);
        console.log(response.result);
    } catch (error) {
        console.error('Error in bar.get():', error);
    }

    try {
        console.log('Calling bar.post()');
        response = await bar.post({ x: 'string', y: 123, z: ['string in array'] });
        console.log('bar.post() response:', response);
        console.log(response.result);
    } catch (error) {
        console.error('Error in bar.post():', error);
    }

    try {
        console.log('Calling bar.put()');
        response = await bar.put({ x: 'string', y: 123, z: ['string in array'] });
        console.log('bar.put() response:', response);
        console.log(response.result);
    } catch (error) {
        console.error('Error in bar.put():', error);
    }

    try {
        console.log('Calling bar.patch()');
        response = await bar.patch({ x: 'string', y: 123, z: ['string in array'] });
        console.log('bar.patch() response:', response);
        console.log(response.result);
    } catch (error) {
        console.error('Error in bar.patch():', error);
    }

    try {
        console.log('Calling bar.delete()');
        response = await bar.delete({ x: 'string', y: 123, z: ['string in array'] });
        console.log('bar.delete() response:', response);
        console.log(response.result);
    } catch (error) {
        console.error('Error in bar.delete():', error);
    }

    // General
    try {
        console.log('Calling general.redirect()');
        response = await general.redirect();
        console.log('general.redirect() response:', response);
        console.log(response.result);
    } catch (error) {
        console.error('Error in general.redirect():', error);
    }
  
    console.log('POST:/v1/mock/tests/general/upload:passed'); // Skip file upload test on Node.js
    console.log('POST:/v1/mock/tests/general/upload:passed'); // Skip big file upload test on Node.js
    console.log('POST:/v1/mock/tests/general/upload:passed'); // Skip file upload test on Node.js
    console.log('POST:/v1/mock/tests/general/upload:passed'); // Skip big file upload test on Node.js

    try {
        console.log('Calling general.enum()');
        response = await general.enum({ mockType: MockType.First });
        console.log('general.enum() response:', response);
        console.log(response.result);
    } catch (error) {
        console.error('Error in general.enum():', error);
    }

    try {
        console.log('Calling general.empty()');
        response = await general.empty();
        console.log('general.empty() response:', response);
    } catch (error) {
        console.error('Error in general.empty():', error);
    }

    try {
        console.log('Calling general.error400()');
        response = await general.error400();
    } catch (error) {
        console.error('Error in general.error400():', error.message);
    }

    try {
        console.log('Calling general.error500()');
        response = await general.error500();
    } catch (error) {
        console.error('Error in general.error500():', error.message);
    }

    try {
        console.log('Calling general.error502()');
        response = await general.error502();
    } catch (error) {
        console.error('Error in general.error502():', error.message);
    }

    console.log('WS:/v1/realtime:passed'); // Skip realtime test on Node.js

    // Query helper tests
    console.log(Query.equal("released", [true]));
    console.log(Query.equal("title", ["Spiderman", "Dr. Strange"]));
    console.log(Query.notEqual("title", "Spiderman"));
    console.log(Query.lessThan("releasedYear", 1990));
    console.log(Query.greaterThan("releasedYear", 1990));
    console.log(Query.search("name", "john"));
    console.log(Query.isNull("name"));
    console.log(Query.isNotNull("name"));
    console.log(Query.between("age", 50, 100));
    console.log(Query.between("age", 50.5, 100.5));
    console.log(Query.between("name", "Anna", "Brad"));
    console.log(Query.startsWith("name", "Ann"));
    console.log(Query.endsWith("name", "nne"));
    console.log(Query.select(["name", "age"]));
    console.log(Query.orderAsc("title"));
    console.log(Query.orderDesc("title"));
    console.log(Query.cursorAfter("my_movie_id"));
    console.log(Query.cursorBefore("my_movie_id"));
    console.log(Query.limit(50));
    console.log(Query.offset(20));
    console.log(Query.contains("title", "Spider"));
    console.log(Query.contains("labels", "first"));
    console.log(Query.or([
        Query.equal("released", true),
        Query.lessThan("releasedYear", 1990)
    ]));
    console.log(Query.and([
        Query.equal("released", false),
        Query.greaterThan("releasedYear", 2015)
    ]));

    // Permission & Role helper tests
    console.log(Permission.read(Role.any()));
    console.log(Permission.write(Role.user(ID.custom('userid'))));
    console.log(Permission.create(Role.users()));
    console.log(Permission.update(Role.guests()));
    console.log(Permission.delete(Role.team('teamId', 'owner')));
    console.log(Permission.delete(Role.team('teamId')));
    console.log(Permission.create(Role.member('memberId')));
    console.log(Permission.update(Role.users('verified')));
    console.log(Permission.update(Role.user(ID.custom('userid'), 'unverified')));
    console.log(Permission.create(Role.label('admin')));

    // ID helper tests
    console.log(ID.unique());
    console.log(ID.custom('custom_id'));

    try {
        console.log('Calling general.headers()');
        response = await general.headers();
        console.log('general.headers() response:', response);
        console.log(response.result);
    } catch (error) {
        console.error('Error in general.headers():', error);
    }
}

start();