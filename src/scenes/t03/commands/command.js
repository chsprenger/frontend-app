import Ajv from 'ajv';
import uuid from 'uuid';

import ajv0 from "ajv/lib/refs/json-schema-draft-04.json";
import createModflowModelPayloadSchema from './createModflowModelPayloadSchema';

class Command {

    metadata = [];
    uuid = uuid();

    static createModflowModel(payload) {
        return new Command("createModflowModel", payload, createModflowModelPayloadSchema);
    }

    constructor(name, payload, schema) {
        this.message_name = name;
        this.payload = payload;
        this.schema = schema;

        const [isValid, errors] = this.validate();
        if (!isValid) {
            console.warn(
                'Invalid payload sending ' + this.message_name,
                JSON.stringify(errors)
            );
        }
    }

    validate() {
        const ajv = new Ajv({schemaId: 'auto'});
        ajv.addMetaSchema(ajv0);
        const val = ajv.compile(this.schema);
        return [val(this.payload), val.errors];
    }

    toObject = () => ({
        uuid: this.uuid,
        message_name: this.message_name,
        metadata: this.metadata,
        payload: this.payload
    })
}

export default Command;
