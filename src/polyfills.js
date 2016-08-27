import "core-js";
import "reflect-metadata";
import "rxjs";
import "zone.js";

if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;

}