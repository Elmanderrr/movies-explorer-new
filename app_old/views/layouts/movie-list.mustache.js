let tpl = `
    {{#list}}
            <div class="row">

                <div class="col-md-5">
                    <a href="#">
                        <img class="img-responsive" alt=""
                        src="https://image.tmdb.org/t/p/w396{{backdrop_path}}" >
                    </a>
                </div>

                <div class="col-md-7">
                    <h3>{{title}}</h3>
                    <h4 class="inline">
                        {{vote_average}}/10
                    </h4>
                    <span class="label label-success">{{vote_count}} голосов</span>

                    <p>
                        {{overview}}
                    </p>
                    <button type="submit" class="btn btn-primary btn-raised">
                        SHOW
                        <span class="glyphicon glyphicon-chevron-right"></span>
                    </button>
                    <button type="submit" class="btn btn-primary btn-raised">SHOW</button>
                </div>

            </div>
            <hr />
    {{/list}}
`;

export default tpl
